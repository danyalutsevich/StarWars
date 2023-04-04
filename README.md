# StarWars
## App for browsing starwars characters

- I used react-native-paper for search bar and table
- Redux for state management and AsyncStorage to save liked characters
- RTK Query to get data from api

- Also I added images from another api <https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/2.json>

- Web deploy: <https://star-wars-browserr.web.app/>
- APK (Google Drive): <https://drive.google.com/file/d/1U5uHJZE5cYIMtsoVXF4SMcsqc-v-ks0v/view?usp=sharing>

![video_2023-03-23_20-04-12](https://user-images.githubusercontent.com/83612717/227304779-ccf493a7-b56e-4b97-b7da-3517d11b57bc.gif)


## Fixes

- Filter function moved to useGetPageQuery and now it takes two params (page, searchQuery)
- New apk : <https://drive.google.com/file/d/1PW1B5Loxpz5XryafiTnkUq2Ed1vrM-sB/view?usp=sharing>
- Web deploy available with the same link: <https://star-wars-browserr.web.app/>
- Fixed like button (remove option added)
- Horizontal scroll removed I could make it just by removing ScrollView and it would look like this
- Pagination is always visible now
<img src="https://user-images.githubusercontent.com/83612717/229865765-1bdd2a7c-5566-4935-816f-5b7c60c29430.jpg" width="200">

- But I decided to display the columns conditionally based on the screen size, and if the screen size is less than 420px, then only three columns will be displayed, like in the image below.

<img src="https://user-images.githubusercontent.com/83612717/229867563-2a17b288-0c64-4a66-9b53-485d36ec9ae9.jpg" width="200">


