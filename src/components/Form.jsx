import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formData } from '../lib/utils';
import './Form.css';

const schema = z.object({
	first_name: z.string().min(1, 'Este campo es requerido'),
	last_name: z.string().min(1, 'Este campo es requerido'),
	email: z.string().min(1, 'Este campo es requerido').email('Email no válido'),
	password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
	birthday: z.coerce.date(),
	image_url: z.string().url().or(z.literal('')),
});

const defaultValues = {
	first_name: '',
	last_name: '',
	email: '',
	password: '',
	birthday: '',
	image_url: '',
};

function Form({ onSubmit, onCancel, user = null }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
		defaultValues: defaultValues,
	});

	useEffect(() => {
		if (user) {
			user.birthday = formData(user.birthday);
			reset(user);
		} else {
			reset(defaultValues);
		}
	}, [user]);

	const onSubmitForm = (dataForm) => {
		if (user) {
			onSubmit({ ...dataForm, id: user.id });
		} else {
			onSubmit(dataForm);
		}
		reset(defaultValues);
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)} className="form">
			<div className="form-floating mb-3">
				<input
					className="form-control"
					id="floatingInput"
					placeholder="First Name"
					{...register('first_name')}
				/>
				<label htmlFor="floatingInput"></label>
				{errors.first_name && <p>{errors.first_name?.message}</p>}
			</div>

			<div className="form-floating mb-3">
				<input
					className="form-control"
					id="floatingInput"
					placeholder="Last Name"
					{...register('last_name')}
				/>
				<label htmlFor="floatingInput"></label>
				{errors.last_name && <p>{errors.last_name?.last_name}</p>}
			</div>

			<div className="form-floating mb-3">
				<input
					className="form-control"
					id="floatingInput"
					placeholder="Email"
					{...register('email')}
				/>
				<label htmlFor="floatingInput"></label>
				{errors.email && <p>{errors.email?.message}</p>}
			</div>
			<div className="form-floating mb-3">
				<input
					className="form-control"
					id="floatingInput"
					placeholder="Password"
					{...register('password')}
				/>
				<label htmlFor="floatingInput"></label>
				{errors.password && <p>{errors.password?.message}</p>}
			</div>

			<div className="form-floating mb-3">
				<input
					type="date"
					className="form-control"
					id="floatingInput"
					placeholder="Birthday"
					{...register('birthday')}
				/>
				<label htmlFor="floatingInput"></label>
				{errors.birthday && <p>{errors.birthday?.message}</p>}
			</div>

			<div className="form-floating mb-3">
				<input
					className="form-control"
					id="floatingInput"
					placeholder="Image URL"
					{...register('image_url')}
				/>
				<label htmlFor="floatingInput"></label>
				{errors.image_url && <p>{errors.image_url?.message}</p>}
			</div>

			<button
				type="submit"
				className={`btn ${user ? 'btn-warning' : 'btn-dark'}`}
			>
				{user ? 'Update' : 'Create'}
			</button>

			{user && (
				<button type="button" className="btn btn-light ms-2" onClick={onCancel}>
					Cancel
				</button>
			)}
		</form>
	);
}

export default Form;
