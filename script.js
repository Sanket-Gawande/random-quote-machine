 const new_quote = document.getElementById('new-quote');
        const tweet_quote = document.getElementById('tweet-quote');
        const text = document.getElementById('text');
        const author = document.getElementById('author');

         function get_new_quote() {
            const url  = 'http://quotes.stormconsultancy.co.uk/random.json';
            fetch(url)
            .then(data => data.json())
            .then(result => {
               
                text.innerHTML = result.quote;
                author.innerHTML = result.author;
                tweet_quote.setAttribute('href' , `https://twitter.com/intent/tweet?text=${result.quote}`);

                
            })
            .catch(err => console.log(err))
        }
        //calling function to show a quote by default

       get_new_quote();
