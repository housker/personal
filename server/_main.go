package main

import (
    // "encoding/json"
    // "fmt"
    "log"
    "net/http"
	"time"
 
    "github.com/gorilla/mux"
)

func main() {
	// port := ":3000"
	// handler := http.FileServer(http.Dir("client"))
	// http.ListenAndServe(port, handler)

    r := mux.NewRouter()

    // r.FileServer(http.Dir("./client"))

	// r.PathPrefix("/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./public/"))))

	// r.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    //     // http.ServeFile(w, r, "./public/index.html")
	// 	http.FileServer(http.Dir("./public/"))
    // })

	r.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("public/")))) 
    log.Println("Listening at port 3000") 
    http.ListenAndServe(":3000", r) 

    srv := &http.Server{
        Handler:      r,
        Addr:         "127.0.0.1:3000",
        WriteTimeout: 15 * time.Second,
        ReadTimeout:  15 * time.Second,
    }

    log.Fatal(srv.ListenAndServe())
}
