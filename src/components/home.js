import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll } from "../redux/actions/fetchActions";
import "./comp-css/home.css"
import { NavLink } from "react-router-dom";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch])

    const allpost = useSelector(state => state.posts);
    const load = useSelector(state => state.loading);
    const findError = useSelector(state => state.error);

    if (load === true) {
        return <div>
            <h1>Loading......</h1>
        </div>
    }
    if (findError) {
        return <div>
            <h1 >SOME ERROR WHILE FETCHING PLEASE CHECK CONSOLE</h1>
            {console.log(findError)}
        </div>
    }

    return <div>
        <section>
            <div className="posts">
                {
                    allpost.map(value => (
                        <NavLink to={{
                            pathname: '/display',
                            search: `?id=${encodeURIComponent(value.id)}&imageUrl=${encodeURIComponent(`https://picsum.photos/200?random=${value.id}`)}&title=${encodeURIComponent(value.title)}&userId=${encodeURIComponent(value.userId)}&body=${encodeURIComponent(value.body)}`,
                        }}
                        >                            <div key={value.id} class="card">
                                <div className="img">
                                    <img src={`https://picsum.photos/200?random=${value.id}`} alt=""></img>
                                </div>
                                <div class="card-body">
                                    <h2>User ID: {value.userId}</h2>
                                    <h2>Title : {value.title.slice(0, 15) + "...."}</h2>

                                    <p>Body : {value.body.slice(0, 100)}
                                        <br />
                                        Read More....
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </section>
    </div>

}








export default Home;