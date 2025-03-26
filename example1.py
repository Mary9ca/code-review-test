# Código con problemas de estilo y rendimiento
def suma ( a,b ):
return a+b

def multiplicacion (a, b):
    resultado = 0
    for i in range(b):
        resultado += a
    return resultado

print("Suma:", suma(5,3))
print("Multiplicación:", multiplicacion(5,3))
