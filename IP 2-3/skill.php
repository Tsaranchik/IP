<?php
$title = "Навыки";
include_once "header.php";
?>

<section class="skill section-bg">
    <div class="skill__container">
        <div class="skill__info">
            <div class="skill__info-title">Мои навыки</div>
            <div class="skill__info-text">
                Сейчас я только начинающий программист, поэтому мои
                навыки сейчас не на очень высоком уровне, однако я активно
                развиваю их. На диаграмме справа вы можете посмотреть мои
                основные направления и на сколько они развиты на данный момент.
            </div>
        </div> 
        <div class="skill__stats">
            <div class="skills">
                    <div class="skill">
                        <div class="skill__name">Python</div>
                        <div class="skill__bar">
                            <div class="skill__per" per='50%' style='max-width: 50%'></div>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill__name">Discord.py</div>
                        <div class="skill__bar">
                            <div class="skill__per" per='50%' style='max-width: 50%'></div>
                        </div>
                    </div>
                    <div class="skill">
                        <div class="skill__name">Java</div>
                        <div class="skill__bar">
                            <div class="skill__per" per='20%' style='max-width: 20%'></div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="img/discord.jpg" alt="" class="skill__stats-img">
            
        </div>
    </div>
</section>

<?php
include_once "footer.php";
?>

</body>

</html>