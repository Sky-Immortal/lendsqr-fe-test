import { User } from "../utils/userUtils";

export const fetchUsers = async (setUsers: (users: User[]) => void) => {
  try {
    const response = await fetch("http://localhost:5000/users");
    const data = await response.json();
    setUsers(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const generatePaginationItems = (
  currentPage: number,
  totalPages: number,
  setCurrentPage: (page: number) => void,
  svgAssets: any
) => {
  const paginationItems = [];

  paginationItems.push(
    <li className="page-item" key="prev">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className="page-link"
        disabled={currentPage === 1}
      >
         <img src={svgAssets.prev} alt="Previous" className="pagination-icon" />
      </button>
    </li>
  );

  if (currentPage <= 3) {
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      paginationItems.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <button onClick={() => setCurrentPage(i)} className="page-link">
            {i}
          </button>
        </li>
      );
    }
    if (totalPages > 3) {
      paginationItems.push(
        <li className="page-item disabled" key="ellipsis-end">
          <span className="page-link">...</span>
        </li>,
        <li className="page-item" key={totalPages}>
          <button onClick={() => setCurrentPage(totalPages)} className="page-link">
            {totalPages}
          </button>
        </li>
      );
    }
  } else {
    paginationItems.push(
      <li className="page-item" key="first">
        <button onClick={() => setCurrentPage(1)} className="page-link">
          1
        </button>
      </li>,
      <li className="page-item disabled" key="ellipsis-start">
        <span className="page-link">...</span>
      </li>
    );

    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      paginationItems.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <button onClick={() => setCurrentPage(i)} className="page-link">
            {i}
          </button>
        </li>
      );
    }

    if (currentPage < totalPages - 1) {
      if (currentPage + 1 < totalPages - 1) {
        paginationItems.push(
          <li className="page-item disabled" key="ellipsis-end">
            <span className="page-link">...</span>
          </li>
        );
      }
      paginationItems.push(
        <li className="page-item" key={totalPages}>
          <button onClick={() => setCurrentPage(totalPages)} className="page-link">
            {totalPages}
          </button>
        </li>
      );
    }
  }

  paginationItems.push(
    <li className="page-item" key="next">
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="page-link"
        disabled={currentPage === totalPages}
      >
        <img src={svgAssets.next} alt="Next" className="pagination-icon" />
      </button>
    </li>
  );

  return paginationItems;
};

export const handlePageChange = (
  event: React.ChangeEvent<HTMLSelectElement>,
  setCurrentPage: (page: number) => void
) => {
  setCurrentPage(Number(event.target.value));
};

export const toggleMenu = (
  userId: string,
  openMenuId: string | null,
  setOpenMenuId: (id: string | null) => void
) => {
  setOpenMenuId(openMenuId === userId ? null : userId);
};

export const toggleFilterPopup = (
  event: React.MouseEvent<HTMLTableHeaderCellElement>,
  setPopupPosition: (position: { top: number; left: number }) => void,
  setIsFilterPopupOpen: (isOpen: boolean) => void
) => {
  const rect = event.currentTarget.getBoundingClientRect();
  setPopupPosition({
    top: rect.bottom + window.scrollY,
    left: rect.left + window.scrollX,
  });
  setIsFilterPopupOpen(true);
};