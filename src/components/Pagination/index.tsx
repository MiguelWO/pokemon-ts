import styles from './styles.module.scss'

interface Props {
    perPage: number;
    page: number;
    nextPage: () => void;
    prevPage: () => void;
    maxItems: number;
};

export const Pagination = ({perPage, page, nextPage, prevPage, maxItems}: Props) => {
    const maxPage = Math.ceil(maxItems / perPage);
    return (
        <div className = {styles.pagination}>
            <button
                onClick = {prevPage}
                disabled = {page === 1}
            >
                &lt;
            </button>
            <span>
                {page}
            </span>
            <button
                onClick = {nextPage}
                disabled = {page === maxPage}
            >
               &gt;
            </button>
        </div>
    );
};