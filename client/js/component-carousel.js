Vue.component(
    'component-carousel',
    {
        template : 
        `
        <div class="container">
            <div class="row">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="./img/slider7.jpg" alt="Los Angeles" style="width:100%;">
                            <div class="carousel-caption">
                                <h3>LBJ 13</h3>
                                <p style="font-weight:bold;">Out Now !</p>
                            </div>
                        </div>

                        <div class="item">
                            <img src="./img/slider1.jpg" alt="Chicago" style="width:100%;">
                            <div class="carousel-caption">
                                <h3>Get Duncan Official Retirement Jersey</h3>
                                <p style="font-weight:bold;">Thank you, Spurs!</p>
                            </div>
                        </div>

                        <div class="item">
                            <img src="./img/slider4.jpg" alt="New york" style="width:100%;">
                            <div class="carousel-caption">
                                <h3>Welcome back, Rose !</h3>
                                <p>Shop for Wolves D-Rose Jersey</p>
                            </div>
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>        
        `
    }
)