self.addEventListener('install', function(event) {
    console.log('service worker has been installed');
    });
    

self.addEventListener('activate', function(event) {
    console.log('service worker has been activated');
    });
               
 
    self.addEventListener('fetch', function(event) {
        console.log('fetch successfull');
        });
            
    /*self.addEventListener('push', function   (event)   {
        var data = "hello";
        if (data.method == "pushMessage") { console.log("Push notiﬁcation sent");
        event.waitUntil(self.registration.showNotiﬁcation("Omkar Sweets Corner", { body: "hi"
        }))
        }
        
        })
        */

        self.addEventListener('push', (event) => {
            const options = {
                body: 'This notification was generated from a push!',
                icon: '',
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: '2'
                },
                actions: [
                    {
                        action: 'explore', title: 'Explore this new world',
                        icon: ''
                    },
                    {
                        action: 'close', title: 'Close',
                        icon: ''
                    },
                ]
            };
            event.waitUntil(
                self.registration.showNotification('Title', options)
            )
            });