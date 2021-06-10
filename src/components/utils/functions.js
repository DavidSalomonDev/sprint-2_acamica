const dateConversor = (date) =>{
	const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
	const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
	const fromMiliSeconds = new Date(date)
            
	return `${days[fromMiliSeconds.getDay()]}, ${fromMiliSeconds.getDate()} de ${months[fromMiliSeconds.getMonth()]} de ${fromMiliSeconds.getFullYear()}`
    
}

export default dateConversor