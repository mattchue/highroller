# highroller
highroller rolls dice, mostly. it can do other stuff too, but you probably have to ask it nicely.

### setup
1. `npm install`
2. change login information [here](https://github.com/mattchue/highroller/blob/master/index.js#L63) to be whatever your bot credentials are
3. change ip address [here](https://github.com/mattchue/highroller/blob/master/index.js#L10) and [here](https://github.com/mattchue/highroller/blob/master/index.js#L12) to either localhost or your server ip if hosting on something remote, like heroku
4. `npm start`

### usage
to use highroller, type `!dNN` where NN is the number of sides on the side you would like you roll. you can also type `!roll NdS`, where n is the number of dice and s is the number of sides. you can also `!ping` it, to test connectivity and response time, as well as `!horo sign` where sign is your horoscope sign, to get your daily horoscope. 
