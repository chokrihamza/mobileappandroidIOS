import React,{useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';
const EditScreen = ({ navigation }) => {
      const id = navigation.getParam('id');
      
      const { state,editBlogPost} = useContext(Context);
      
      const blogPost =state.find(blogPost =>blogPost.id === id);
      console.log(blogPost.id)
      return <BlogPostForm
            initialValues={{title:blogPost.title, content:blogPost.content}}
            onSubmit={(title, content) => {
            editBlogPost(blogPost.id,title,content,()=>navigation.pop())
      } }/>
}

const styles = StyleSheet.create({})
export default EditScreen;