
  const goodMessage = ['An exciting opportunity lies ahead of you', 'A weight will be taken off your mind', 'All your hard work will soon pay off', 'Happy news is on its way'];

  const beAwareMessage = ['You will be hungry again in an hour', 'A piece of clothing will be lost in the wash', 'A challenge lays ahead', 'Someone will dissapoint you'];

  const generalMessage = ['Dont worry about money. The best things in life are free', 'The early bird gets the worm, but the second mouse gets the cheese', 'If you look back, youll soon be going that way', 'If you want the rainbow, you have to tolerate the rain.'];

  const randomMessage = () => {
    let randomGood = goodMessage[Math.floor(Math.random()*goodMessage.length)]
    let randomBeAware = beAwareMessage[Math.floor(Math.random()*beAwareMessage.length)]
    let randomGeneral = generalMessage[Math.floor(Math.random()*generalMessage.length)]
    return ("You're good fortune is: " + randomGood + "\nSomething to be aware of: " + randomBeAware + "\nA message just for you: " + randomGeneral)
  };

  console.log(randomMessage());
