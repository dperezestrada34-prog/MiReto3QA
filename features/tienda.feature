Feature: Flujos de la Tienda Online

  @camino_feliz
  Scenario: Realizar la compra de un producto
    Given que el usuario "emilys" ha iniciado sesión
    When agrega un "Laptop" al carrito
    And completa el formulario de pago
    Then debería ver el mensaje "Thank you for your purchase"

  @negativo
  Scenario: Intento de login con credenciales incorrectas
    Given que el usuario intenta ingresar con "usuario_falso" y "clave_error"
    Then debería visualizar un mensaje de error "Invalid credentials"

  @libre_decision
  Scenario: Cerrar sesión exitosamente
    Given que el usuario "emilys" está dentro de su cuenta
    When selecciona la opción de salir
    Then debería ser redirigido a la pantalla de inicio de sesión