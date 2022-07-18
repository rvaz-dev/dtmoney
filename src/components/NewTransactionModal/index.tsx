import Modal from 'react-modal'
import { FormEvent, useState } from 'react'

import { Container, TransactionTypeContainer, RadialBox } from './styles'
import { api } from '../../services/api'

import closedImg from '../../assets/closed.svg'
import depositImg from '../../assets/deposit.svg'
import withdrawImg from '../../assets/withdraw.svg'

Modal.setAppElement('#root')

// Modal Interface
interface ModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

// New Transaction Modal
export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
	const [transactionType, setTransactionType] = useState('')
	const [title, setTitle] = useState('')
	const [value, setValue] = useState(0)
	const [category, setCategory] = useState('')

	// Handle Submit
	// Handle Transaction Type
	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault()

		// New Transaction
		const newTransaction = {
			title,
			value,
			type: transactionType,
			category
		}

		api.post('/transactions', newTransaction).then(() => {
			onRequestClose()
		})
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<button type='button' onClick={onRequestClose} className='react-modal-close'>
				<img src={closedImg} alt='Fechar Modal' />
			</button>
			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar Transação</h2>
				<input
					placeholder='Titulo'
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input
					type='number'
					placeholder='Valor'
					value={value}
					onChange={(event) => setValue(Number(event.target.value))}
				/>

				<TransactionTypeContainer>
					<RadialBox
						type='button'
						onClick={() => setTransactionType('deposit')}
						isActive={transactionType === 'deposit'}
						activeColor='green'
					>
						<img src={depositImg} alt='Entrada' />
						<span>Entrada</span>
					</RadialBox>
					<RadialBox
						type='button'
						onClick={() => setTransactionType('withdraw')}
						isActive={transactionType === 'withdraw'}
						activeColor='red'
					>
						<img src={withdrawImg} alt='Entrada' />
						<span>Saida</span>
					</RadialBox>
				</TransactionTypeContainer>

				<input
					placeholder='Categoria'
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>

				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	)
}
