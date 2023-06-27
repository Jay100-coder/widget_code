const Title = styled.h5`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;
const Cover = styled.img`
  border-radius: 5px;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const Description = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
  font-family: "Pixel Emulator", "Press Start 2P", Courier new, monospace;
  color: #fff;
  font-weight: 300;
`;
const FakeButton = styled.a`
  border-radius: 5px;
  width: auto;
  text-transform: uppercase;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #000;
  outline: 0;
  font-weight: 600;
  :hover {
    opacity: 0.8;
    text-decoration: none;
    color: #fff;
  }
`;
const Card = styled.div`
  border-radius: 8px;
  color: #0c0c0c;
  background: #000;
  align-items: center;
  justify-content: center;
  max-width: 20rem;
  padding: 25px 32px;
  display: flex;
  flex-direction: column;
`;
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  text-align: center;
  justify-content: center;
  padding: 15px;
  background-color: #0c0c1f;
  color: #fff;
`;
const CardList = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(200px, 1fr);
  gap: 0.5rem;
`;
const Pixel = styled.div`
  background: aliceblue;
  font-size: 1.3rem;
  font-weight: 10rem;
  color: white;
  height: auto;
  margin: 10px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 0;
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  border-style: solid;
  border-width: 20px;
  border-image: url(https://i.imgur.com/sREM8Yn.png) 20 stretch;
  :active {
    top: 2px;
  }
`;
const PixelText = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
  font-family: "Pixel Emulator", "Press Start 2P", "Courier new", "monospace";
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 6.5rem;
  text-align: center;
  margin: -20px -20px;
  line-height: 1.5rem;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  padding: 10px 20px;
  background: linear-gradient(135deg, transparent 10px, #000000 0) top left,
    linear-gradient(225deg, transparent 10px, #000000 0) top right,
    linear-gradient(315deg, transparent 10px, #000000 0) bottom right,
    linear-gradient(45deg, transparent 10px, #000000 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  background-image: radial-gradient(
      circle at 0 0,
      rgba(204, 0, 0, 0) 14px,
      #000000 15px
    ),
    radial-gradient(circle at 100% 0, rgba(204, 0, 0, 0) 14px, #000000 15px),
    radial-gradient(circle at 100% 100%, rgba(204, 0, 0, 0) 14px, #000000 15px),
    radial-gradient(circle at 0 100%, rgba(204, 0, 0, 0) 14px, #000000 15px);
`;
const PixelContainer = styled.div`
  display: flex;
  width: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const Carousel = () => {
  const CarouselSrc = ` 
  <style>
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

    * {
        box-sizing: border-box;
    }

    html, body{
        font-family: "Pixel Emulator", "Press Start 2P", Courier new, monospace;
        overflow: hidden;
        width: 100%;
        height: 100%;
        margin: auto;
    }

    .mySlides {
        display: none;
    }

    /* Slideshow container */
    .slideshow-container {
        max-width: 1000px;
        position: relative;
        margin: auto;
        height: 100%;
    }

    /* Caption text */
    .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        bottom: 8px;
        width: 50%;
        height: auto;
        text-align: center;
    }

    .active {
        background-color: #717171;
    }

    .sliderStyle {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
    }

    .welcomeTips {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: .8rem;
    }

    .slideImg {
        width: 70%;
    }

    /* Fading animation */
    .fade {
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @keyframes fade {
        from {
            opacity: .4
        }

        to {
            opacity: 1
        }
    }

    
</style>

<body>
    <div class="slideshow-container">
        <div class="mySlides fade">
            <img class="slideImg" src="https://user-images.githubusercontent.com/100770363/241330819-010617e4-b2b3-4d34-a59c-c1b58bf92d8d.png">
            <div class="welcomeTips">
                <h2 style="color: white;">The Basics</h2>
            </div>
        </div>
        <div class="mySlides fade">
            <img class="slideImg" src="https://user-images.githubusercontent.com/100770363/241331374-56bd3f0c-7ed3-4923-bd48-4aac7367b280.png">
            <div class="welcomeTips">
                <h2 style="color: white;">Main Menu</h2>
                <span style="color: white;">From the main menu, you can see all of the main things you can do in the game. Battle, Mint Unit, Check the Leaderboard, Check Active Rooms, and the market. On the right hand side of your image, this is where the troops that you own will be displayed.</span>
            </div>
        </div>
        <div class="mySlides fade">
            <img class="slideImg" src="https://user-images.githubusercontent.com/100770363/241335354-eaf25884-de02-4d7a-a8f2-3c4e59214d5f.png">
            <div class="welcomeTips">
                <h2 style="color: white;">Battles</h2>
                <span style="color: white;">This is what you'll see when you select battle. You will have the option to create a new challenge, or fight against someone's challenge. These matches are best 2 out of 3</span>
            </div>
        </div>
        <div class="mySlides fade">
            <img class="slideImg" src="https://user-images.githubusercontent.com/100770363/241335498-727bf24d-a65c-4bff-b404-8bcadc558512.png">
            <div class="welcomeTips">
                <span style="color: white; padding: 1rem;">This is the challenge you chose to accept. As you can see the opponent already set the field for the first round, and it is your job to assemble your own side so that you can attempt to take the first round.</span>
            </div>
        </div>
        <div class="mySlides fade">
            <img class="slideImg" src="https://user-images.githubusercontent.com/100770363/241335871-e9c8e5fe-db38-4ada-b1ff-7d895e61f44e.png">
            <div class="welcomeTips">
                <span style="color: white; padding: 1rem;">Thanks to the cheeky placement of the warlock, You were able to take the first round. From here, you will have to wait for the opponent to respond before you can attack again.</span>
            </div>
        </div>
    </div>
    <br>
    <script>
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].classList.remove("sliderStyle");
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex - 1].classList.add("sliderStyle");
            setTimeout(showSlides, 7000); // Change image every 2 seconds
        }
    </script>
</body> `;
  return (
    <iframe style={{ height: "100vh", width: "100%" }} srcDoc={CarouselSrc} />
  );
};

const PlayerDashboard = async () => {
  let playerData = Near.view("pixeltoken.near", "ctt_get_player_data", {
    account_id: context.accountId,
  });
  let units_ids = playerData.playerdata.unit_ids.map((id) => {
    return id;
  });
  let units_data = Near.view("pixeltoken.near", "ctt_get_units_by_ids", {
    token_ids: units_ids,
  });
  const code = `

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js" integrity="sha256-tG5mcZUtJsZvyKAxYLVXrmjKBVLd6VpVccqz/r4ypFE=" crossorigin="anonymous"></script>
</head>
<style>
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

    body {
        padding: 5px;
        background: rgb(14, 14, 30);
        font-family: "Pixel Emulator", "Press Start 2P", Courier new, monospace;
        color: #f8f8f8;
        text-shadow: 2px 0 0 #000, 0 2px 0 #000;
    }

    .troop-details {
        display: flex;
        flex-direction: column;
        padding: 5px;
        width: 300px;
        height: 200px;
        margin: 2rem 0 2rem 0;
    }

    .troop-details-list {
        padding: 0.2rem;
    }

    .troop-details ul.troop-details-list li.troop-details-item {
        list-style: square inside url("data:image/gif;base64,R0lGODlhEAAQAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIOlI+py+0Po5y02ouzPgUAOw==");
        font-size: .8rem;
        padding: .2rem;
    }

    .troop-details ul.troop-details-list li.troop-details-item.selected {
        list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABoUlEQVR42mJg2MHAICGh8Z9BQkLj/4IDB/4DAAAA//9iZNjBwMDAwMDAtIDjwH8GBgYGAAAAAP//YpCQ0Pj/4ccPOGZk2MHAIJGgAZFlYGAAAAAA//9igJuyg4GBYQcDA4qWihkz/jNWzJjxX0NDg+HGjRsMHQoZjHAtMG0AAAAA//+C21vxAKKyIiIDbvyLBTcYmSQSNP4v4DjwX0NDg4GBgYGhY8UMBmTAwsDAwFARkcGQ0FCAIvFiwQ1GBgYGBkYJCWQ3YwIAAAAA//+CuwHmOZhODI/C/FUxY8Z/FF9UzJjxn4GBgaEiIQHDeA0FAwbGDz9+/N9w4gRc8MaNGwwLGiYgvLnhxAmGGzduYOiGuYUFJomsCNmhWKKHATMk8YUDQAzweNyB8PKCAwdQohQlvtEw3AkvFtxglEjQ+N+xYgZDgIUF3HzkEEAGFREZDC8W3GBkkUjQ+H/jwQWGjgUL/mus0MBQGGBhwYArpOCJAR1gsxWW1OAhuAAaihISGv/RUxI2sKBhApZ0giUMsBmGSzNRyZUQwEjOuBIELjnAADXE07fDV16dAAAAAElFTkSuQmCC");
    }

    .troop-details.ff {
        background-color: #282880;
        box-shadow: 0 0 0 1px #c8e0e0, 0 0 0 2px #808080, 0 0 0 3px #283030, inset 0 0 0 1px #303088;
        border-radius: 5px;
        height: 100%;
    }

    .troopdata {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>

<body>
    <div id="balance">
    </div>
    <div id="troopdata" class="troopdata container-fluid row">
    </div>
</body>
<script>
    window.addEventListener("message", (event) => {
        const data = event.data.data;
        const balances = data[0].balance;
        const troops = data[1];
        const playerId = data[2];
        const pixeltokens = $("<p></p>").text("PixelTokens:");
        const tokens = $("<p></p>").text("Units:");
        const player = $("<p></p>").text("Player:");
        pixeltokens.append(balances.pixeltoken);
        tokens.append(balances.tokens);
        player.append(playerId);
        $("#balance").append(player, pixeltokens, tokens);
        troops.map((troop) => {
            const meta_data = troop.metadata;
            const dataContainer = $("<div></div>").addClass("troop-details ff");
            const dataList = $("<ul></ul>").addClass("troop-details-list");
            const troopDetails = {
                name: meta_data.title.split("|")[0].split("-")[1].trim(),
                power: meta_data.title.split("|")[1].trim()
            }
            const troopid = $("<li></li>").text("ID: ").append(troop.token_id).addClass("troop-details-item");
            const unit_type = $("<li></li>").text("Type: ").append(troop.unit_type).addClass("troop-details-item");
            const health_mod = $("<li></li>").text("Health Mod: ").append(troop.health_mod).addClass("troop-details-item");
            const damage_mod = $("<li></li>").text("Damage Mod: ").append(troop.damage_mod).addClass("troop-details-item");
            const speed_mod = $("<li></li>").text("Speed Mod: ").append(troop.speed_mod).addClass("troop-details-item");
            const price = $("<li></li>").text("Price: ").append(troop.price).addClass("troop-details-item");
            const title = $("<li></li>").text("Class: ").append(troopDetails.name).addClass("troop-details-item");
            const power = $("<li></li>").text(troopDetails.power).addClass("troop-details-item");
            // const image = $("<img />").attr("src", meta_data.media);
            dataList.append(troopid, unit_type, health_mod, damage_mod, speed_mod, price, title, power);
            dataContainer.append(dataList);
            $("#troopdata").append(dataContainer);
        })
    });
</script> `;
  return (
    <div>
      <div style={{ backgroundColor: "white" }} className="d-flex">
        <iframe
          style={{ height: "70vh", width: "100%" }}
          srcDoc={code}
          message={{
            data:
              [playerData, units_data, context.accountId] || "No Player Data",
          }}
        />
      </div>
    </div>
  );
};

const GameDescription = () => {
  const code = `
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js" integrity="sha256-tG5mcZUtJsZvyKAxYLVXrmjKBVLd6VpVccqz/r4ypFE=" crossorigin="anonymous"></script>
    </head>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

        body {
            padding: 5px;
            background: rgb(14, 14, 30);
            font-family: "Pixel Emulator", "Press Start 2P", Courier new, monospace;
            color: #f8f8f8;
            text-shadow: 2px 0 0 #000, 0 2px 0 #000;
        }

        .gameDescription{
            display: flex;
            flex-direction: column;
        }

        .title{
            text-align: center;
        }

        .description{
            font-size: 0.75rem;
            text-align: justify;
        }
    </style>

    <body>
        <div class="gameDescription">
        </div>
    </body>
    <script>
        window.addEventListener("message", (event) => {
            const title = event.data.data.title;
            const description = event.data.data.description;

            const descriptionHeader = $("<h4></h4>").text(title).addClass("title");
            const gameDescription = $("<p></p>").text(description).addClass("description");

            $(".gameDescription").append(descriptionHeader, gameDescription);
        });
    </script> 
`;
  const data = {
    title: "Chain Team Tactics",
    description: `Chain Team Tactics is an nft based pvp battle simulator. Collect a
        minimum of 6 units and start to battle other players! Each battle is
        fought as best of three and the starting player changes each round. To
        make it more spicy, you will battle about your PXT stake (after beta).
        Still don't understand? Take a game like Fire Emblem or Final Fantasy
        Tactics, slap it onto the blockchain, and you're left with this amazing
        game called Chain Team Tactics`,
  };
  return (
    <div>
      <div style={{ backgroundColor: "white" }} className="d-flex">
        <iframe
          style={{ height: "50vh", width: "100%" }}
          srcDoc={code}
          message={{ data: data || "No Data" }}
        />
      </div>
    </div>
  );
};

const WidgetCard = ({ title, coverSrc, description, actionButtons }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Cover src={coverSrc} alt={title} />
      <Description>{description}</Description>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
        }}
      >
        {" "}
        {actionButtons.map((button, index) => (
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            /*onClick={()=> handleButtonClick(button.url)}*/ href={button.url}
          >
            {" "}
            <PixelContainer>
              <Pixel>
                <PixelText> {button.label}</PixelText>
              </Pixel>
            </PixelContainer>
          </a>
        ))}{" "}
      </div>
    </Card>
  );
};
const WidgetImages = [
  {
    title: "Chain Team Tactics Image",
    url: "https://pd.marmaj.org/ctt/mint2.png",
  },
];
const Mainnet = [
  { title: "Chain Team Tactics", url: "https://pd.marmaj.org/chainteam" },
];
const Testnet = [
  {
    title: "Chain Team Tactics",
    url: "https://pd-testnet.marmaj.org/chainteam",
  },
];
const Wiki = [
  {
    title: "Chain Team Tactics Wiki",
    url: "https://github.com/MarmaJFoundation/chainteamtactics-wiki/wiki",
  },
];
const Test_Slides = [
  {
    slideImage: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    slideInfo: "Dummy Information 1",
  },
  {
    slideImage: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    slideInfo: "Dummy Information 2",
  },
];

const isUserRegistered = Near.view(
  "pixeltoken.near",
  "ctt_is_player_registered",
  {
    account_id: context.accountId,
  }
);

return (
  <div
    style={{
      display: "flex",
      flexFlow: "column",
      alignItems: "space-evenly",
      backgroundColor: "#0e0e1e",
      padding: "20px",
    }}
  >
    <Hero>
      <a
        href={Mainnet.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <img
          style={{
            width: "100%",
          }}
          src={`https://user-images.githubusercontent.com/100770363/241338189-eb7cd1db-00a7-4dd3-ab44-d1ab6f24c2e8.png`}
        />
      </a>
      <div style={{ marginBottom: "20px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></div>
      </div>
    </Hero>
    <GameDescription />
    <Carousel />
    {isUserRegistered == true ? (
      <PlayerDashboard />
    ) : (
      <CardList>
        {" "}
        {Mainnet.map((widget, index) => (
          <WidgetCard
            key={index}
            coverSrc={WidgetImages[index].url}
            description=""
            actionButtons={[
              { label: "Play", url: widget.url },
              { label: "Test", url: Testnet[index].url },
              { label: "Wiki", url: Wiki[index].url },
            ]}
          />
        ))}
      </CardList>
    )}
  </div>
);
