import React from 'react'
import './search.css'

export default function Search() {
    return (
        <form class="search-form">
        <div class="input-group">
            <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-search"></i></span></div><input type="text" class="form-control" placeholder="I am looking for.." />
            <div class="input-group-append"><button class="btn btn-light" type="button">Search </button></div>
        </div>
    </form>
    )
}
