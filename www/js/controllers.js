angular.module('ToSBuilder.controllers', [])

  .controller('AuthCtrl', function($scope) {
    var isNewUser = true;

    var ref = new Firebase('https://tosbuilder.firebaseio.com');
    ref.onAuth(function(authData) {
      if (authData && isNewUser) {
        ref.child('users').child(authData.uid).set({
          provider: authData.provider,
          name: getName(authData)
        });
      };
    });

    var getName = function(authData) {
      switch (authData.provider) {
        case 'password':
          return authData.password.email.replace(/@.*/, '');
        case 'twitter':
          return authData.twitter.displayName;
        case 'facebook':
          return authData.facebook.displayName;
      }
    }
  })

  .controller('DashCtrl', function($scope) { })

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('JobsCtrl', function($scope, $log, Utils, Jobs) {
    var jobs = Jobs.all();
    // $scope.remove = function(job) {
    //   Jobs.remove(job);
    // };

    $scope.jobs = [];

    // $scope.jobs = Jobs;
    // $log.log($scope.jobs);
    angular.forEach(jobs, function(val, key) {
      $scope.jobs.push(val);
      // $log.log(val);
    });



    $scope.range = Utils.range;

    $scope.canChooseClass = function(current, parent) {
      var isRankPossible = parent.rank < current.rank ? true : false;
      var isCirclePossible = current.circles >= 1 && current.circles <= 3;
      return isRankPossible && isCirclePossible;
    };

  })

  .controller('BuildCtrl', function($scope, $log, Utils, Jobs) {
    var data = Jobs.all;
    $scope.jobs = [];
    $scope.range = Utils.range;

    //   rank1 = Jobs.getByName("Archer");
    // rank1.$loaded(function() {
    //   $log.log(rank1.rank);
    // });

    data.$loaded(function() {
      angular.forEach(data, function(val, key) {
        $scope.jobs.push(val);
      });
    });

  })


  /**
   * Fluxo das telas
   *

  Tela 1: Selecionar classe do rank 1. Ao selecionar ir pra proxima tela. Thats all.

  Tela 2: Mostrar a classe selecionada no topo, com o cículo q está em forma de estrela (como no F3) e mostrar as skills. Do lado de cada skill, um ícone (+) pra levar pra tela de atributos daquela skill. Embaixo da classe no topo, um botão "Attributes" pra mostrar todos os atributos da classe (inclusive os das skills de baixo, podendo comprar e mostrando tudo q já foi comprado). Uma barra em cima de voltar pro rank anterior (apagando o q fez nesse, com um aviso), e um botão embaixo "Próximo Rank (n) >"

  Tela 3: Mostrar no topo os ranks já escolhidos. Volta pra tela 1 pra selecionar novas classes possíveis nesse rank e círculos possíveis dos jobs já escolhidos.

  Tela 4: Se já tiver alguma classe escolhida antes, mostrar a escolhida agora em destaque, mas mostrar as outras q já escolheu, tudo no topo. A tela é igual a tela 2, só com essa diferença

   */



  .controller('SkillsCtrl', function($log, $scope, $stateParams, Utils) {
    Utils.calculateCircle($stateParams);
    // var job = $stateParams.job;

  })

  ;
