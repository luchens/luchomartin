<?php
  set_time_limit(0);
  // Supply a user id and an access token
  $userid = "6028252587";
  $accessToken = "6028252587.a73b64b.c0a20451ea424a8eb092d11c638363e7";

  // Gets our data
  function fetchData($url){
       $ch = curl_init();
       curl_setopt($ch, CURLOPT_URL, $url);
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
       curl_setopt($ch, CURLOPT_TIMEOUT, 20);
       $result = curl_exec($ch);
       curl_close($ch);
       return $result;
  }

  // Pulls and parses data.
  $result = fetchData("https://api.instagram.com/v1/users/{$userid}/media/recent/?access_token={$accessToken}&count=33");
  $result = json_decode($result);

  //var_dump($result);
?>


<?php foreach ($result->data as $post): ?>
  <!-- Renders images. @Options (thumbnail,low_resoulution, high_resolution) -->
  <a class="group" rel="group1" href="<?= $post->images->standard_resolution->url ?>"><img src="<?= $post->images->thumbnail->url ?>"></a>
<?php endforeach ?>

<!--<script>
instagramLoadDashboard = function(hash)
    {
        code = hash.split('=')[1];

        $('#instagram-pictures .images-list .container').html('').addClass('loading');


        ts = Math.round((new Date()).getTime() / 1000);
        url = 'https://api.instagram.com/v1/users/self/media/recent?count=200&min_timestamp=0&max_timestamp='+ts+'&access_token='+code;

        instagramLoadMediaPage(url, function(){

            galleryHTML = instagramLoadGallery(instagramData);
            //console.log(galleryHTML);
            $('#instagram-pictures .images-list .container').html(galleryHTML).removeClass('loading');
            initImages('#instagram-pictures');

            IGStatus = 'loaded';

        });

    };

    instagramLoadMediaPage = function (url, callback)
    {
        $.ajax({
                url : url,
                dataType : 'jsonp',
                cache : false,
                success:  function(response){

                                        console.log(response);

                                        if(response.code == '400')
                                        {
                                            alert(response.error_message);
                                            return false;
                                        }

                                        if(response.pagination.next_url !== undefined) {
                                            instagramData = instagramData.concat(response.data);
                                            return instagramLoadMediaPage(response.pagination.next_url,callback);
                                        }

                                        instagramData = instagramData.concat(response.data);
                                        callback.apply();
                                    }
        });
    };

    instagramLoadGallery = function(images)
    {
        galleryHTML ='<ul>';

        for(var i=0;i<images.length;i++)
        {
            galleryHTML += '<li><img src="'+images[i].images.thumbnail.url+'" width="120" id="instagram-'+images[i].id+' data-type="instagram" data-source="'+images[i].images.standard_resolution.url+'" class="image"/></li>';

        }

        galleryHTML +='</ul>';

        return galleryHTML;
    };
</script>-->

<?php
    /*set_time_limit(0);
    function getPost($url,$i)
    {
        static $posts=array();
        $json=file_get_contents($url);
        $data = json_decode($json);
        $ins_links=array();
        $page=$data->pagination;
        $pagearray=json_decode(json_encode($page),true);
        $pagecount=count($pagearray);

        foreach( $data->data as $user_data )
        {
            $posts[$i++]=$user_data->link;
        }

        if($pagecount>0)
            return getPost($page->next_url,$i);
        else
            return $posts;
    }
    $posts=getPost("https://api.instagram.com/v1/users/CLIENT-ACCOUNT-NUMBER/media/recent?client_id=6028252587&count=33",0);

    print_r($posts);*/

?>
