# CommentBox 9001

CommentBox 9001 is a simple comment-fetching app created using **React**, **MobX** and **Typescript**.  

### Installing

Just clone the repository and give it a nice `npm install`



# Container Components

### CommentList

CommentList observes the mobx store and renders either a Spinner, ErrorFetching or list of SingleComment components accordingly.

# Presentational Components

### SingleComment

This component is the one in charge of showing most of the information on this application

**Component interface props**
* **postId?**: *number*, will only show if `expanded={true}`
* **id?:** *number*, will only show if `expanded={true}`
* **name:** *string*, will be transformed to title case and only show up to 20 characters unless `expanded={true}`
* **email:** *string*, will be transformed to lowercase
* **body:** *string*, will only show up to 30 characters unless `expanded={true}`
* **expanded:** *boolean*, 
* **onClick?:** *any*, passes a function to be executed while clicking on the component. Avoid if `expanded={true}`

### ErrorFetching

UI utility component that indicates something is wrong. 

**Component interface props**
* **buttonText**: *string*, passes the text to be placed inside of the component's button
* **buttonFunction:** *any*, passes a function to be executed when the button is clicked
### Spinner

UI utility component that renders a graphic spinner and indicates something is about to happen. 

# Utilities

### stringShortener(str, value)

Cuts a string short and appends ... to the end.

* str: string you want to truncate
* value: amount of characters

### toTitleCase(str)

Capitalizes the first letter of each word transforms everything else to lower case.

