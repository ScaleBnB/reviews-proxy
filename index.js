const axios = require('axios');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3004;
require('newrelic');

const service = 'http://18.144.87.134:3003';

app.use(morgan('dev')); // for logging http requests to the terminal
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // for serving static files

// Calendar Proxy Response
// app.get('/month', (req, res) => {
//     axios.get('http://3.16.164.208:3001', {
//       params: req.query
//     })
//     .then(({ data }) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   });

// Image Carousel Proxy Response
// app.get('/gallery/:id', (req, res) => {
//   var id = req.query.id;
//   axios.get(`http://13.57.225.193:3000/gallery/${id}`)
//   .then(({ data }) => {
//     res.json(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

// Reviews Proxy Response
// app.get('/api/0', (req, res) => {
//   axios.get(`http://13.57.226.2:3003/:3003/api/0`)
//   .then(({ data }) => {
//     res.json(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

// Recommendations Proxy Response
// app.get('/listings', (req, res) => {
//   axios.get(`http://52.53.211.102:3002/`)
//   .then(({ data }) => {
//     res.json(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

// Create / POST - create a new item
app.post(`/properties/:propertyID/reviews`, (req, res) => {
  axios.post(`${service}/properties/${req.params.propertyID}/reviews`, req.body)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
// Read / GET - get all reviews of a given property
app.get(`/properties/:propertyID/reviews`, (req, res) => {
  axios.get(`${service}/properties/${req.params.propertyID}/reviews`)
  .then((response) => {
    res.json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

  // axios
  //   .get('${service}/properties/1000/reviews')
  //   .then((response) => {
  //     console.log(response.data);
  //     res.end(JSON.stringify(response.data));
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.end();
  //   });
});

// Delete / DELETE - delete a review of a given property
app.delete('/properties/:propertyID/reviews', (req, res) => {
  axios.delete(`${service}/properties/${req.params.propertyID}/reviews/?reviewID=${req.query.reviewID}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Put / DELETE - delete a host response
app.put('/properties/:propertyID/replies', (req, res) => {
  axios.put(`${service}/properties/${req.params.propertyID}/replies/?reviewID=${req.query.reviewID}`, req.body)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Update / PUT - update an item based on query
app.put('/properties/:propertyID/reviews', (req, res) => {
  axios.put(`${service}/properties/${req.params.propertyID}/reviews?reviewID=${req.query.reviewID}`, req.body)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});


app.listen(port, () => {
  console.log(`server running at: ${service}`);
})

//Hi there baby