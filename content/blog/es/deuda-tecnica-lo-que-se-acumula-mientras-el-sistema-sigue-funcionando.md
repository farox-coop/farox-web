---
title: "Deuda técnica: lo que se acumula mientras el sistema sigue funcionando"
description: "En todos los proyectos de software, con el pasar del tiempo empieza a ocurrir algo llamado deuda técnica."
url_img: "/images/blog/technical-debt-what-builds-up-while-the-system-keeps-running.png"
date: "2026-05-13"
author: "Jonathan Cavia"
tags: ["Software", "Deuda Técnica", "Arquitectura"]
aliases: ["technical-debt-what-builds-up-while-the-system-keeps-running"]
tintasur: true
---

El sistema funciona, los cambios salen, el equipo avanza, pero hay un momento donde empieza a pasar otra cosa. Las tareas se vuelven más lentas, los cambios más incómodos y ciertas partes del sistema empiezan a quedar en un estado difícil de tocar.
\
\
No está roto, pero tampoco está bien.

## Podemos pensar la deuda en dos categorías

Por un lado está la **deuda entrópica**, que se genera con el pasar del tiempo por motivos externos, aparece aunque hagas las cosas bien.
\
\
Son:
- Librerías que dejan de mantenerse  
- Programas que quedan desactualizados  
- Sistemas operativos que se vuelven inseguros  
- Infraestructura que ya no acompaña.

Es el mismo azar jugándonos en contra con el pasar de los días y la infraestructura dejando de sostener el trabajo que hacemos.
\
\
Por otro lado está la **deuda incidental**. Esta es más interesante, porque es la que construimos nosotros.
\
\
Aparece con desarrollo sostenido **sin revisiones**, con actualizaciones de la arquitectura inicial, con cambios introducidos a propósito, consciente o inconscientemente.
\
\
Los sistemas cambian -humanos o no-, los requerimientos del negocio se ajustan constantemente, y esas modificaciones se van sumando sobre una base que en su momento funcionó, pero que ya no responde igual de bien al problema actual. Las cosas siguen andando, pero no de la mejor manera.
\
\
En ingeniería de software a eso se le suele llamar *erosión*, yo a veces le digo ***servidor tóxico***. Ese estado de "no me mires mucho que me enojo y reviento". Por consecuencia nadie quiere tocar nada.

## Un sistema, dos realidades

Esto se ve bastante claro cuando trabajás sobre sistemas que ya tienen varios años. En un mismo proyecto podés tener partes que funcionan bien y otras donde el paso del tiempo es evidente.
\
\
Por ejemplo, en uno de los sistemas en los que estuve trabajando el último tiempo, desarrollamos un módulo nuevo para gestionar incumplimientos; es decir, los pagos inconclusos, es decir, la deuda. Más allá del mal sabor que deja el problema real a resolver. Este módulo se hizo desde cero. Se pudo diseñar con cierta claridad, iterar con los usuarios, ajustar los requerimientos y mantener relativamente controlada la deuda técnica.
\
\
En paralelo, había otras áreas del sistema que venían acumulando años de cambios: nuevos requerimientos, ajustes sobre ajustes, integraciones con otros sistemas, decisiones que en su momento tenían sentido (no realmente, pero ese es otro tema), cosas que hoy ya no encajan del todo bien.
\
\
**Ahí el problema deja de ser técnico en el sentido más directo.** No es escribir más código, es entender qué cambiar sin romper todo lo demás.

## Cuando el problema deja de ser técnico

La deuda técnica no suele aparecer como un error, aparece en forma de tiempo y costos:
* Cambios que antes llevaban horas pasan a llevar días.  
* Tareas simples empiezan a requerir validaciones adicionales.  
* La eficiencia del desarrollo se ve afectada.

Y en algún punto, empieza a impactar en decisiones más grandes: qué se puede hacer, qué conviene postergar, qué directamente no se toca.
\
\
Ahí la deuda técnica deja de ser algo interno del equipo y pasa a ser un condicionante del negocio.

## Cuándo se paga

Suele repetirse bastante que la deuda técnica se paga en dos momentos:
* Cuando uno decide hacerlo y toma los recaudos necesarios. (El mejor momento)  
* Cuando viene a cobrarte.

No necesariamente de forma dramática, a veces es algo más simple, por ejemplo un sistema que no soporta la dirección en la que el negocio necesita ir, una integración que deja de funcionar, una plataforma base que ya no tolera ciertos cambios.
\
\
El problema no es que exista deuda técnica, siempre va a haber, **el problema es no saber dónde está, cuánto pesa y qué implica sostenerla en el tiempo.**
\
\
Trabajar sobre deuda técnica no es solo una cuestión de código, es una cuestión de decisiones. Decisiones sobre:
* Qué se prioriza.  
* Qué se deja para después.  
* Qué se sigue sosteniendo.

En sistemas que ya tienen historia, esas decisiones terminan definiendo no sólo cómo funciona el software, sino también qué tan viable es seguir construyendo sobre él.

## Cómo manejar la deuda técnica

Una de las cosas más difíciles cuando trabajás sobre sistemas con mucha deuda técnica no es escribir código, sino **recuperar la confianza necesaria para modificar algo**. Cuando se llega a cierto nivel de erosión, todos los cambios generan incertidumbre, no se sabe del todo qué puede romperse ni hasta dónde llegan las consecuencias.
\
\
Una forma que encontré para trabajar en estos casos es adaptar TDD (Test Driven Development) a sistemas ya existentes. Es decir, usar tests como herramientas de protección más que como simple validación.
\
\
Algo parecido a red-green-refactor, pero con una vuelta:
\
\
**green → red → green → refactor**
\
\
Primero escribo tests sobre algo que ya funciona. (green)  
Después lo rompo a propósito.  
Corro el test y falla. (red)  
Arreglo lo que rompí a propósito.  
Corro el test y ahora maravillosamente pasa. (green)  
Y recién ahí empiezo con el refactor.
\
\
El objetivo no es "hacer TDD correctamente", sino reducir la incertidumbre.
\
\
El test deja de ser solamente una comprobación técnica y pasa a ser protección, funciona como un contrato.
\
\
Y cuando ese contrato representa bien lo que el negocio necesita, aparece algo que suele faltar en sistemas con deuda técnica acumulada: la posibilidad de meter mano sin miedo.