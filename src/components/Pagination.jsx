import './Pagination.css';
function Pagination({ page, totalPages, prev, next }) {
	return (
		<div className="pagination btn-pagination">
			<button onClick={prev} disabled={page === 1} className="btn-pag">
				Prev
			</button>
			<p>
				{page} of {totalPages}
			</p>
			<button onClick={next} disabled={page === totalPages} className="btn-pag">
				Next
			</button>
		</div>
	);
}

export default Pagination;
