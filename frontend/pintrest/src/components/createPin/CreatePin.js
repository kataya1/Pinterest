import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import './createpin.css'
// import 'bootstrap/dist/css/bootstrap.min.css';



class CreatePin extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
            sendData:{
                title:'',
                description:'',
                image:'',
                creator:'',
                website:''
        
            },
            url:'',
        
        }
    }


    
    getData = async()=>{
        try{
        const token = localStorage.getItem('token')
        const host = localStorage.getItem('host')
        let api = await fetch(`${host}/pin/create/`,{
        method: 'GET',
        headers: {'Authorization': `Token ${token}`}})
          let data = await api.json();
          console.log(data)
          this.setState({
              data:data
          })
        }
          catch{
            let error = 'Iternal Server Error'
            console.log(error)

          }
          
      }

    componentDidMount(){
        this.getData();
    };
    

    postData = (file)=>{
        const host = localStorage.getItem('host')
        const url =`${host}/pin/create/`
        const formdata = new FormData()
        formdata.append('image', file)
        formdata.append('title', this.state.sendData.title)
        formdata.append('description', this.state.sendData.description)
        formdata.append('creator', this.state.data.username)
        formdata.append('website', this.state.sendData.website)
        const token = localStorage.getItem('token')
        

        fetch(url,{
            method:"POST",
            headers:{
                'Authorization': `Token ${token}`
            },
            body:formdata,
        }).then((res)=>{
            if (res){
                console.log(res)
            }
            this.props.navigate('/home')            
        }).catch((error)=>{console.log(error)})

    }

    uploadImage = (e)=>{
        let inputfile = e.target.files[0]
        
        this.setState({
        url:URL.createObjectURL(inputfile)
    },()=>console.log(typeof this.state.url))

    }


    createImage = (e)=>{
        e.preventDefault()
        let inputfile = e.target.image.files[0]
        this.setState({
            sendData:{
                title:e.target.title.value,
                description:e.target.description.value,
                image:e.target.image.value,
                creator:this.state.data.username,
                website:e.target.website.value,
            },
            url:URL.createObjectURL(inputfile)
       
        },()=>{ 
            this.postData(inputfile);
    
        })
    }
    render(){
        const media = localStorage.getItem('media')
        const frontendhost = localStorage.getItem('frontendhost')

            return ( 
           
            <>
    <div className='container-fluid'>
        <div className='for-container'>
            <div className='row lable'>

                <div className="lable">
               <div>Create a Pin</div>
                </div>


            </div>

            <form action={frontendhost} method="GET" onSubmit={this.createImage} >
      
            <div className='row create'>

                <div className="create">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="card">
                            <input className="media-upload" onChange={(e)=>this.uploadImage(e)} type="file" name='image' />
                            {this.state.url.length > 16 && <img  className="media-back" src={this.state.url} alt="."/>} 
                            

                            {this.state.url === "" && <div className="media-back">

                           
                                <div className="media-content">
                                    <div>
                                    <FontAwesomeIcon icon={faArrowAltCircleUp}/>
                                    <p>Click to Upload</p>
                                    </div>
                                    <div className='recommendaion'>
                                        <p>Recommendaion: Use high-quality .jpg</p>
                                        <p>files less than 20MB</p>
                                    </div>
                                </div>
                            </div> }

                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                        
                            <div className="card">
                            <input type="submit" href="#" value='Save' className="btn btn-primary"/>

                            <div className="card-body">
                                <input type='text' name='title' className="card-title" placeholder='Add Your Title'/>
                                <div className='user'>


                                    <img className='avatar' alt="avatar" src={`${media}${this.state.data.avatar}`}/>

                                    <p className='name'>{this.state.data.username}</p>
                                </div> 
                                <input type='text' name='description' className="card-text" placeholder='Tell everyone what your Pin is about'/>
                            </div>
                            </div>
                            <input type='text'  name='website' className="website" placeholder='Add a destination link'/>

                        </div>
                        </div>
                    </div>
                   
            </div>
            </form>
            
        </div>
        
    </div> 
    
    </> );
    }

    
}
export default CreatePin;





