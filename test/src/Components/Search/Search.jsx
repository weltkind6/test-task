import React, {useState} from 'react';

const Search = ({bigData}) => {

    const [search, setSearch] = useState('')

    const onSearchHandler = () => {
        if(!search) {
            return ''
        }
        return (bigData.map(i => i.firstName).filter(el => el.includes(search)))
    }
    const filteredData = onSearchHandler()
    console.log(filteredData)



    const onPushEnter = e => {
        if (e.code === 'Enter') {
            onSearchHandler()
        }
    }


    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={onPushEnter}
            />
            <div className="input-group-append">
                <button
                    onClick={onSearchHandler}
                    className="btn btn-outline-secondary"
                    type="button">
                    Button
                </button>
            </div>
        </div>
    );
};

export default Search;