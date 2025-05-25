# DiscoSwinger
Part of a Suite of Disco Elysium tools. Acts as an API layer companion to [DiscoCourier](https://github.com/htmlbanjo/disco-courier).

Swinger is not actively maintained, but it may help fast-track querying your Courier data, if you need something quick.

# Installation

- clone this repo
- cd into the new folder
- `npm install`

 Next, you will need to extract any/all data that you want to query using DiscoCourier. See the courier docs for details.

 - If you've extraded the data to a sqlite database, place it in the /src/data/ directory directly.
 - Courier will also have created a /data/cache directory on first run. Copy this to Swinger, or symlink it.
 - You can also add the sequelize migration and model folders that you use in Courier in the /data folder here
 - Again, you may consider just symlinking the /data folder in Courier, so that future exports are available on demand.

Once ready, `npm run dev`. The terminal should inform you that it's running on port 8080.

go to localhost:8080/docs/ will bring up a swagger page. **It is incomplete**

for a full list of endpoints, see the /src/constants/endpoint.ts

# Endpoints

| endpoint          |
|-------------------|
| /server-status    |
| /location         |
| /variable         |
| /actor            |
| /actor-skill      |
| /actor-attribute  |
| /item             |
| /conversation     |
| /orb              |
| /check            |
| /dialog           |
| /dialogtext       |
| /link             |
| /passivecheck     |
| /redcheck         |
| /whitecheck       |
| /task             |
| /subtask          |


for most endpoints, adding attributes that correspond to the entity will filter your query, e.g.

localhost:8080/actor/?actorId=32 
localhost:8080/conversation/?conversationType=101 (retrieves all barks)



 
