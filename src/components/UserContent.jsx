import UserCard from './UserCard';
import { usePagination } from '../hooks/usePagination';
import Pagination from './Pagination';
import './UserContent.css';

function UserContent({ users, onEdit, onDelete }) {
	const { page, items, totalPages, prev, next } = usePagination(users);

	return (
		<>
			<div className="content">
				{items.map((user) => (
					<UserCard
						key={user.id}
						user={user}
						onEdit={onEdit}
						onDelete={onDelete}
					/>
				))}
			</div>

			<Pagination page={page} totalPages={totalPages} prev={prev} next={next} />

			{users.length === 0 && <p>No users found</p>}
		</>
	);
}

export default UserContent;
