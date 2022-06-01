import React from 'react'
import PropTypes from 'prop-types'

const Form = function form (props) {
  	return <form>
		<div className='form-column'>
			<div className='form-row'>
				<input type="text" id='title' placeholder='Título'
					value={props.title}
					onChange={(event) => props.setTitle(event.target.value)}
				/>
				<input type="date" id='dueDate' placeholder='Data'
					value={props.dueDate}
					onChange={(event) => props.setDueDate(event.target.value)}
				/>
			</div>

			<input type="text" id='description' placeholder='Descrição'
				value={props.description}
				onChange={(event) => props.setDescription(event.target.value)}
			/>
		</div>

		<div className='form-column'>
			<button type='button' className='submit'
			onClick={props.handleData}
			>Adicionar</button>
			<button type='button' className='reset' onClick={props.clearInput}>Limpar</button>
		</div>

  	</form>
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  dueDate: PropTypes.string.isRequired,
  setDueDate: PropTypes.func.isRequired,
  handleData: PropTypes.func.isRequired,
  clearInput: PropTypes.func
}

export default Form
