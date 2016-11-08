<!-- <?php sleep(2) //just some delay to simulate latency ?> -->
<ul class="news-list stretchable">
    <li class="animated fadeInDown bg-addition">
        <span class="icon background-danger">
            <i class="fa fa-lock"></i>
        </span>
        <div class="news-item-info">
            <h4 class="name"><a href="#">Just now! Check update time</a></h4>
            <p>
                Check this news item timestamp. There is a small server part that generates current timestamp so it
                would be easier for you to see ajax widgets in action
            </p>
            <div class="time"><?php  echo date("M j, H:i:s")?></div>
        </div>
    </li>
    <li>
        <span class="icon background-warning">
            <i class="fa fa-star"></i>
        </span>
        <div class="news-item-info">
            <h4 class="name"><a href="#">First Human Colony on Mars</a></h4>
            <p>
                First 700 people will take part in building first human settlement outside of Earth.
                That's awesome, right?
            </p>
            <div class="time">Mar 20, 18:46</div>
        </div>
    </li>
    <li>
        <span class="icon background-info">
            <i class="fa fa-microphone"></i>
        </span>
        <div class="news-item-info">
            <h4 class="name"><a href="#">Light Blue reached $300</a></h4>
            <p>
                Light Blue Inc. shares just hit $300 price. "This was inevitable. It should
                have happen sooner or later" - says NYSE expert.
            </p>
            <div class="time">Sep 25, 11:59</div>
        </div>
    </li>
    <li>
        <span class="icon background-lime">
            <i class="fa fa-eye"></i>
        </span>
        <div class="news-item-info">
            <h4 class="name"><a href="#">No more spying</a></h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="time">Mar 20, 18:46</div>
        </div>
    </li>
</ul>