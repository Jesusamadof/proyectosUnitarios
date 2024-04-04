import matplotlib
matplotlib.use('Agg')
from flask import Flask, render_template, request
import matplotlib.pyplot as plt
from io import BytesIO
import base64

app = Flask(__name__)

def calcular_descuento_ventas(ventas):
    descuento = ventas * 0.1
    return descuento

def calcular_ganancias(ventas, descuento):
    ganancias = ventas - descuento
    return ganancias

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        ventas_totales = float(request.form['ventas'])
        descuento = calcular_descuento_ventas(ventas_totales)
        ganancias = calcular_ganancias(ventas_totales, descuento)


       
        # Generar gráfico de barras
        categorias = ['Ventas Totales', 'Descuento (10%)', 'Ganancias Netas']
        valores = [ventas_totales, descuento, ganancias]
        plt.bar(categorias, valores, color=['blue', 'red', 'green'])
        plt.ylabel('Monto')
        plt.title('Reporte de Ventas')
        img = BytesIO()
        plt.savefig(img, format='png')
        img.seek(0)
        grafico_url = base64.b64encode(img.getvalue()).decode()
        plt.close()

        return render_template('index.html', ventas=ventas_totales, descuento=descuento, ganancias=ganancias, grafico=grafico_url)
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
