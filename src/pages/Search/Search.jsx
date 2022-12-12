import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import { useQuery } from "../../hooks/useQuery";

import PostDetail from "../../components/PostDetail";

import { Link } from "react-router-dom";

import styles from "./Search.module.css";

const Search = () => {
  const query = useQuery();
  // search/q
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h1>Resultados encontrados para: {search}</h1>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <div className={styles.noPosts}>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};
export default Search;
