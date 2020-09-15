import React, { Component } from 'react'
import Footer from './Footer'

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <header>
                    <div className="menu">
                            <a href="/signup">Signup</a>
                            <a href="/login">Login</a>
                    </div>
                 <div className="bannnerH">
                        <h1>Find new job</h1>
                        <br/>
                        <div className="op">
                            <div className="searchJ">
                                {/*<img src="https://lh6.googleusercontent.com/yjiNzjczxDl_72U3pDT15uqI_55vwnsDsURY7ZO7lZqJ-yA-3H_D1HC7q8n2lNunPK12Y9hqLpihZw=w3430-h6867-rw"></img>
                               */} 
                               <p>Search job</p>
                               <button class="btn btn-dark"><a href="/jobs">Find job</a></button> 

                            </div>
                            <div className="offerJ">
                                <div class="rotate"><p >Offer Job</p>
                                <button class="btn btn-dark"><a href="/add-job">Add job</a></button> 
                                </div>
                            </div>
                        </div> 
                 </div>
                </header>
                <main>
                    <div class="">
                        <h2>New job oportunites</h2>
                        <div class="desc1">
                            <h4></h4>
                            <p></p>
                        </div>
                        <div class="desc1">
                            <h4></h4>
                            <p></p>
                        </div>
                    </div> 
                              
                               
                               
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat massa et dui egestas feugiat. Morbi sit amet libero sapien. Aenean facilisis tincidunt bibendum. Aenean tristique metus sit amet mi scelerisque ultricies. Suspendisse elementum quam a imperdiet fringilla. Pellentesque elementum ultricies eros, et pharetra enim. Sed vulputate et ante id aliquam. Nulla eget venenatis velit. Phasellus commodo tortor at sodales gravida. Integer diam nulla, tincidunt eget auctor at, suscipit non tortor. Nam non porttitor orci. Aenean iaculis turpis ex, eu ullamcorper turpis porttitor sed. Ut tempus justo eros, sed imperdiet risus rutrum eget.

                            Nunc magna elit, pharetra eu lectus ac, dapibus lacinia nibh. Phasellus quis ornare mauris. Praesent aliquam sollicitudin lacinia. Donec hendrerit sodales magna at pellentesque. Vestibulum a malesuada nisi. Vestibulum bibendum justo nec eros ullamcorper accumsan. Aenean quis ex sit amet tellus blandit eleifend. Pellentesque a velit in orci consectetur luctus. Mauris eu maximus nunc. Nam quis risus at ipsum hendrerit convallis non vitae nunc. Mauris porttitor, urna eget dapibus luctus, purus nulla imperdiet mauris, ac blandit mauris massa eget quam. Phasellus vitae turpis euismod, feugiat tortor quis, dapibus ipsum.

                            Sed eu finibus dolor. Integer ullamcorper velit eget facilisis ullamcorper. Vivamus at dui porttitor, convallis nisi vitae, porttitor tellus. Vivamus eu aliquet arcu. Sed nisl mi, aliquam vel ligula vel, porttitor pharetra sapien. Praesent eget placerat libero. Aenean tincidunt libero vitae lorem placerat tincidunt. Maecenas gravida suscipit lacinia. Maecenas quis ultrices magna. Vestibulum sed rhoncus nisl, nec eleifend ipsum. Donec luctus non nibh id hendrerit.

                            Fusce cursus arcu eget vestibulum finibus. Proin quam est, vestibulum laoreet sodales fermentum, aliquam in elit. Nulla auctor feugiat odio, dignissim vulputate dui pharetra id. Integer metus urna, efficitur eu sagittis ut, ullamcorper et dolor. Fusce id facilisis justo, quis pharetra augue. Aliquam sed laoreet tortor. Aliquam efficitur molestie venenatis. Praesent dapibus porta neque, vel luctus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt tincidunt ex vel blandit.

                            Curabitur efficitur, erat vitae ornare lacinia, neque nunc lacinia augue, interdum tempor nisi tortor varius justo. Aliquam tristique ultrices nisl. Sed sed diam diam. Fusce egestas arcu at tellus semper porta. Nulla sit amet augue at tellus scelerisque venenatis. Pellentesque sit amet nulla neque. Vestibulum accumsan id erat sed tincidunt. Morbi eleifend magna ac massa blandit convallis. Morbi tincidunt urna sed lorem fermentum, et pulvinar elit vestibulum. Sed posuere, diam varius finibus placerat, turpis odio pellentesque quam, at viverra sem nibh quis lectus. Sed vulputate ut erat nec mattis. Nunc id lectus in turpis pulvinar condimentum nec quis nibh.
                        </p>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat massa et dui egestas feugiat. Morbi sit amet libero sapien. Aenean facilisis tincidunt bibendum. Aenean tristique metus sit amet mi scelerisque ultricies. Suspendisse elementum quam a imperdiet fringilla. Pellentesque elementum ultricies eros, et pharetra enim. Sed vulputate et ante id aliquam. Nulla eget venenatis velit. Phasellus commodo tortor at sodales gravida. Integer diam nulla, tincidunt eget auctor at, suscipit non tortor. Nam non porttitor orci. Aenean iaculis turpis ex, eu ullamcorper turpis porttitor sed. Ut tempus justo eros, sed imperdiet risus rutrum eget.

                            Nunc magna elit, pharetra eu lectus ac, dapibus lacinia nibh. Phasellus quis ornare mauris. Praesent aliquam sollicitudin lacinia. Donec hendrerit sodales magna at pellentesque. Vestibulum a malesuada nisi. Vestibulum bibendum justo nec eros ullamcorper accumsan. Aenean quis ex sit amet tellus blandit eleifend. Pellentesque a velit in orci consectetur luctus. Mauris eu maximus nunc. Nam quis risus at ipsum hendrerit convallis non vitae nunc. Mauris porttitor, urna eget dapibus luctus, purus nulla imperdiet mauris, ac blandit mauris massa eget quam. Phasellus vitae turpis euismod, feugiat tortor quis, dapibus ipsum.

                            Sed eu finibus dolor. Integer ullamcorper velit eget facilisis ullamcorper. Vivamus at dui porttitor, convallis nisi vitae, porttitor tellus. Vivamus eu aliquet arcu. Sed nisl mi, aliquam vel ligula vel, porttitor pharetra sapien. Praesent eget placerat libero. Aenean tincidunt libero vitae lorem placerat tincidunt. Maecenas gravida suscipit lacinia. Maecenas quis ultrices magna. Vestibulum sed rhoncus nisl, nec eleifend ipsum. Donec luctus non nibh id hendrerit.

                            Fusce cursus arcu eget vestibulum finibus. Proin quam est, vestibulum laoreet sodales fermentum, aliquam in elit. Nulla auctor feugiat odio, dignissim vulputate dui pharetra id. Integer metus urna, efficitur eu sagittis ut, ullamcorper et dolor. Fusce id facilisis justo, quis pharetra augue. Aliquam sed laoreet tortor. Aliquam efficitur molestie venenatis. Praesent dapibus porta neque, vel luctus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt tincidunt ex vel blandit.

                            Curabitur efficitur, erat vitae ornare lacinia, neque nunc lacinia augue, interdum tempor nisi tortor varius justo. Aliquam tristique ultrices nisl. Sed sed diam diam. Fusce egestas arcu at tellus semper porta. Nulla sit amet augue at tellus scelerisque venenatis. Pellentesque sit amet nulla neque. Vestibulum accumsan id erat sed tincidunt. Morbi eleifend magna ac massa blandit convallis. Morbi tincidunt urna sed lorem fermentum, et pulvinar elit vestibulum. Sed posuere, diam varius finibus placerat, turpis odio pellentesque quam, at viverra sem nibh quis lectus. Sed vulputate ut erat nec mattis. Nunc id lectus in turpis pulvinar condimentum nec quis nibh.
                        </p>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat massa et dui egestas feugiat. Morbi sit amet libero sapien. Aenean facilisis tincidunt bibendum. Aenean tristique metus sit amet mi scelerisque ultricies. Suspendisse elementum quam a imperdiet fringilla. Pellentesque elementum ultricies eros, et pharetra enim. Sed vulputate et ante id aliquam. Nulla eget venenatis velit. Phasellus commodo tortor at sodales gravida. Integer diam nulla, tincidunt eget auctor at, suscipit non tortor. Nam non porttitor orci. Aenean iaculis turpis ex, eu ullamcorper turpis porttitor sed. Ut tempus justo eros, sed imperdiet risus rutrum eget.

                            Nunc magna elit, pharetra eu lectus ac, dapibus lacinia nibh. Phasellus quis ornare mauris. Praesent aliquam sollicitudin lacinia. Donec hendrerit sodales magna at pellentesque. Vestibulum a malesuada nisi. Vestibulum bibendum justo nec eros ullamcorper accumsan. Aenean quis ex sit amet tellus blandit eleifend. Pellentesque a velit in orci consectetur luctus. Mauris eu maximus nunc. Nam quis risus at ipsum hendrerit convallis non vitae nunc. Mauris porttitor, urna eget dapibus luctus, purus nulla imperdiet mauris, ac blandit mauris massa eget quam. Phasellus vitae turpis euismod, feugiat tortor quis, dapibus ipsum.

                            Sed eu finibus dolor. Integer ullamcorper velit eget facilisis ullamcorper. Vivamus at dui porttitor, convallis nisi vitae, porttitor tellus. Vivamus eu aliquet arcu. Sed nisl mi, aliquam vel ligula vel, porttitor pharetra sapien. Praesent eget placerat libero. Aenean tincidunt libero vitae lorem placerat tincidunt. Maecenas gravida suscipit lacinia. Maecenas quis ultrices magna. Vestibulum sed rhoncus nisl, nec eleifend ipsum. Donec luctus non nibh id hendrerit.

                            Fusce cursus arcu eget vestibulum finibus. Proin quam est, vestibulum laoreet sodales fermentum, aliquam in elit. Nulla auctor feugiat odio, dignissim vulputate dui pharetra id. Integer metus urna, efficitur eu sagittis ut, ullamcorper et dolor. Fusce id facilisis justo, quis pharetra augue. Aliquam sed laoreet tortor. Aliquam efficitur molestie venenatis. Praesent dapibus porta neque, vel luctus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt tincidunt ex vel blandit.

                            Curabitur efficitur, erat vitae ornare lacinia, neque nunc lacinia augue, interdum tempor nisi tortor varius justo. Aliquam tristique ultrices nisl. Sed sed diam diam. Fusce egestas arcu at tellus semper porta. Nulla sit amet augue at tellus scelerisque venenatis. Pellentesque sit amet nulla neque. Vestibulum accumsan id erat sed tincidunt. Morbi eleifend magna ac massa blandit convallis. Morbi tincidunt urna sed lorem fermentum, et pulvinar elit vestibulum. Sed posuere, diam varius finibus placerat, turpis odio pellentesque quam, at viverra sem nibh quis lectus. Sed vulputate ut erat nec mattis. Nunc id lectus in turpis pulvinar condimentum nec quis nibh.
                        </p>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat massa et dui egestas feugiat. Morbi sit amet libero sapien. Aenean facilisis tincidunt bibendum. Aenean tristique metus sit amet mi scelerisque ultricies. Suspendisse elementum quam a imperdiet fringilla. Pellentesque elementum ultricies eros, et pharetra enim. Sed vulputate et ante id aliquam. Nulla eget venenatis velit. Phasellus commodo tortor at sodales gravida. Integer diam nulla, tincidunt eget auctor at, suscipit non tortor. Nam non porttitor orci. Aenean iaculis turpis ex, eu ullamcorper turpis porttitor sed. Ut tempus justo eros, sed imperdiet risus rutrum eget.

                            Nunc magna elit, pharetra eu lectus ac, dapibus lacinia nibh. Phasellus quis ornare mauris. Praesent aliquam sollicitudin lacinia. Donec hendrerit sodales magna at pellentesque. Vestibulum a malesuada nisi. Vestibulum bibendum justo nec eros ullamcorper accumsan. Aenean quis ex sit amet tellus blandit eleifend. Pellentesque a velit in orci consectetur luctus. Mauris eu maximus nunc. Nam quis risus at ipsum hendrerit convallis non vitae nunc. Mauris porttitor, urna eget dapibus luctus, purus nulla imperdiet mauris, ac blandit mauris massa eget quam. Phasellus vitae turpis euismod, feugiat tortor quis, dapibus ipsum.

                            Sed eu finibus dolor. Integer ullamcorper velit eget facilisis ullamcorper. Vivamus at dui porttitor, convallis nisi vitae, porttitor tellus. Vivamus eu aliquet arcu. Sed nisl mi, aliquam vel ligula vel, porttitor pharetra sapien. Praesent eget placerat libero. Aenean tincidunt libero vitae lorem placerat tincidunt. Maecenas gravida suscipit lacinia. Maecenas quis ultrices magna. Vestibulum sed rhoncus nisl, nec eleifend ipsum. Donec luctus non nibh id hendrerit.

                            Fusce cursus arcu eget vestibulum finibus. Proin quam est, vestibulum laoreet sodales fermentum, aliquam in elit. Nulla auctor feugiat odio, dignissim vulputate dui pharetra id. Integer metus urna, efficitur eu sagittis ut, ullamcorper et dolor. Fusce id facilisis justo, quis pharetra augue. Aliquam sed laoreet tortor. Aliquam efficitur molestie venenatis. Praesent dapibus porta neque, vel luctus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt tincidunt ex vel blandit.

                            Curabitur efficitur, erat vitae ornare lacinia, neque nunc lacinia augue, interdum tempor nisi tortor varius justo. Aliquam tristique ultrices nisl. Sed sed diam diam. Fusce egestas arcu at tellus semper porta. Nulla sit amet augue at tellus scelerisque venenatis. Pellentesque sit amet nulla neque. Vestibulum accumsan id erat sed tincidunt. Morbi eleifend magna ac massa blandit convallis. Morbi tincidunt urna sed lorem fermentum, et pulvinar elit vestibulum. Sed posuere, diam varius finibus placerat, turpis odio pellentesque quam, at viverra sem nibh quis lectus. Sed vulputate ut erat nec mattis. Nunc id lectus in turpis pulvinar condimentum nec quis nibh.
                        </p>
                    </div>
                    <div className="benefits">
                            <h2>Benefits</h2>
                    </div>
                </main>
                <Footer/>               

            </div>
        )
    }
}

export default Home
