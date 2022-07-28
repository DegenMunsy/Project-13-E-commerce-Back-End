// import tag from ../models
import { Tag } from '../models';

// create tagData array
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// create variable to add multiple rows at once
const seedTags = () => Tag.bulkCreate(tagData);

// export seedTags as a model to be used in /seeds/index.js
module.exports = seedTags;
