import { useState } from 'react';

export function usePagination(array = []) {
	const [page, setPage] = useState(1);
	const maxPage = 4;

	const prev = () => {
		if (page === 1) return;
		setPage(page - 1);
	};

	const next = () => {
		if (page === totalPages) return;
		setPage(page + 1);
	};

	const totalPages = Math.ceil(array.length / maxPage);

	const items = array.slice((page - 1) * maxPage, page * maxPage);

	return { page, items, totalPages, prev, next };
}
