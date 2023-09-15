import turtle


def draw_fractal(length, depth):
    if depth == 0:
        turtle.forward(length)
    else:
        draw_fractal(length/3, depth-1)
        turtle.left(60)
        draw_fractal(length/3, depth-1)
        turtle.right(120)
        draw_fractal(length/3, depth-1)
        turtle.left(60)
        draw_fractal(length/3, depth-1)


turtle.speed(10000)
draw_fractal(3000, 7)
turtle.exitonclick()
