angular.module('ToSBuilder.controllers', [])

.controller('DashCtrl', function($scope) {})

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

.controller('JobsCtrl', function($scope, Jobs) {
  $scope.jobs = Jobs.all();
  $scope.remove = function(job) {
    Jobs.remove(job);
  };
})

.controller('JobDetailCtrl', function($scope, $stateParams, Jobs) {
  $scope.job = Jobs.get($stateParams.jobId);
})
;

/**
 * Fluxo das telas
 *

Tela 1: Selecionar classe do rank 1. Ao selecionar ir pra proxima tela. Thats all.

Tela 2: Mostrar a classe selecionada no topo, com o cículo q está em forma de estrela (como no F3) e mostrar as skills. Do lado de cada skill, um ícone (+) pra levar pra tela de atributos daquela skill. Embaixo da classe no topo, um botão "Attributes" pra mostrar todos os atributos da classe (inclusive os das skills de baixo, podendo comprar e mostrando tudo q já foi comprado). Uma barra em cima de voltar pro rank anterior (apagando o q fez nesse, com um aviso), e um botão embaixo "Próximo Rank (n) >"

Tela 3: Mostrar no topo os ranks já escolhidos. Volta pra tela 1 pra selecionar novas classes possíveis nesse rank e círculos possíveis dos jobs já escolhidos.

Tela 4: Se já tiver alguma classe escolhida antes, mostrar a escolhida agora em destaque, mas mostrar as outras q já escolheu, tudo no topo. A tela é igual a tela 2, só com essa diferença

 */
