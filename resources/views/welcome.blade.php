<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12" id="app">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item active">
                              <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/register">Register</a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <router-view></router-view>
                    {{-- <Directory/> --}}
                </div>
            </div>
        </div>

        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
