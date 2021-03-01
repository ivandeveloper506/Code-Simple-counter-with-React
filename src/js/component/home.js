/*******************************************************************************/
/* Fecha Creación: 01 Marzo 2021.                                              */
/* Autor:          Iván Fonseca Castro                                         */
/*                                                                             */
/* Descripción:   Para los efectos de este ejercicio, no se hace uso de este   */
/*                archivo, el contador se renderiza directamente del           */
/*                [simple-counter.js]                                          */
/*******************************************************************************/

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { SimpleCounter } from "./simple-counter.js";

//create your first component
export function Home() {
	return (
		<div>
			<SimpleCounter />
		</div>
	);
}
