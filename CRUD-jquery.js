$(function () {
  var $nameInput = $('.js-name')
  var $emailInput = $('.js-email')
  var $saveBtn = $('.js-save')

  function User(name, email) {
      var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      this.setName = function (newName) {
          this.name = typeof newName === 'string' ? newName : '';
      }

      this.setEmail = function (newEmail) {
          this.email = typeof newEmail === 'string' ? newEmail : '';
      }

      this.isValidEmail = function () {
          return emailRegEx.test(this.email)
      }

      this.isValidName = function () {
          return nameInput.value.length >= 3
      }

      this.isValidUser = function () {
          return this.isValidEmail() && this.isValidName()
      }

      this.getUser = function () {
          return {
              name: this.name,
              email: this.email,
          }
      }

      this.setName(name);
      this.setEmail(email);
  }

  function saveForm() {
      var user = new User($nameInput.val(), $emailInput.val())

      $nameInput.toggleClass('validation-error', !user.isValidName())
      $emailInput.toggleClass('validation-error', !user.isValidEmail())

      if (user.isValidUser()) {
          var list = getUserList()

          if ($saveBtn.data('index')) {
              list[$saveBtn.data('index')] = user.getUser();

              $saveBtn.data('index', '')
          } else {
              list.push(user.getUser())
          }

          localStorage.userList = JSON.stringify(list)

          $nameInput.val('')
          $emailInput.val('')

          renderTable()
      }
  }

  function getUserList() {
      try {
          var list = JSON.parse(localStorage.userList)
      } catch {
          var list = []
      }

      return list;
  }

  $saveBtn.on('click', function () {
      saveForm()
  })

  $('input').on('keypress', function(event) {
      if (event.keyCode === 13) {
          saveForm()
      }
  })

  function renderTable() {
      var list = getUserList()
      var $userTable = $('.js-user-table')

      // if (list.length === 0) {
      //     $('.js-user-table-wrapper').hide()
      // }

      $('.js-user-table-wrapper').html('')

      list.forEach(function (user, index) {
          var userInstance = new User(user.name, user.email);
          var $row = $($('.js-row-template').html());

          $row.find('.js-index').text(index+1)
          $row.find('.js-name').text(userInstance.name)
          $row.find('.js-email').text(userInstance.email)
          $row.find('.js-edit, .js-delete').data('index', index)

          $('.js-user-table').append($row);
      })

      $userTable.find('.js-delete').on('click', function () {
                  var list = getUserList();

                  list.splice($(this).data('index'), 1)

                  localStorage.userList = JSON.stringify(list);
                  renderTable()
              })

              
      $userTable.find('.js-edit').on('click', function () {
        var list = getUserList();
        var user = list[$(this).data('index')]

                  var userInstance = new User()
                  userInstance.setEmail(user.email)
                  userInstance.setName(user.name)

                  $nameInput.val(userInstance.name)
                  $emailInput.val(userInstance.email)

                  $saveBtn.data('index', $(this).data('index'))

  })
}

  renderTable()
})
