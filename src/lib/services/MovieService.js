import movies from "./movies";

export class MovieService {
    static getMovies() {
        return movies ? movies : [];
    }

    static getMovieById(id) {
        return movies.find(movie => movie.imdb_id === id);
    }

    static async getMovieByIdUsingService() {
      const data = await this.postData("http://example.com/answer", { answer: 42 });
      return data;
    }

    static async postData(url, data) {
        // Default options are marked with *
        const response = await fetch(url, {
            body: JSON.stringify(data), 
            cache: "no-cache", 
            credentials: "same-origin",
            headers: {
                "content-type": "application/json"
            },
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // *client, no-referrer
        });
        const json = await response.json();
        return json;
    }
}