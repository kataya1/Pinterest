# Pinterest
pinterest
https://app.diagrams.net/#Hkataya1%2FPinterest%2FERD%2Ferd2


## Requirements

- A typical profile for a user + (bio, website-link 
- A user has pins it’s like saved posts 
- A user may have one or more board/s
- the user has a topic list. it's categories of the topics he's interested in  
  - The topic list is what use to display the posts in home for the user
  - The topic list if updated based on the user pins 
- The user has followers and following 
- website has 2 pages home and today
  - home is where the user sees posts from other people 
    - Home could be sorted by relevance
  - Today has a list of all the trending hashtags that day
    - Hashtags is an umbrella that has all related topics under it


#### simplified
##### entity
- user
- pins
- Topics
- boards
- pin comments
- Messages
- 
##### relations 1 to many (no table)
- user send message
- user receive message
- user make pins
- user has boards 
- 
##### relations many to many
- user follow user
- user React on pin
- user saw(history) pins
- user Saves Pins
- user interested in Topics
- user replies to comments
- user react on comments
- topics has as pins
- pins are in Boards

---
### ERD

![ERD](./erd2.drawio.png)


### Mapping

![image](https://user-images.githubusercontent.com/34242491/141289007-bc45c8da-af5f-4968-843c-ed6b3bc2d4c6.png)
