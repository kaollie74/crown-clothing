# Stripe
https://stripe.com/

# Heroku
heroku.com

# Fire base
* A 'queryReference' object represents the "current" place in the database that we are querying. It does not have the actual data of the collection or document but details about it. 
    
      - They can be used by calling either:
          - firestoe.doc('/user/:userId');
          - firestore.collections('/users');  

* use documentRef objects to perform CRUD operations

      - .set(), .update(), .delete()

* Add documents to collections useing the *collectionRef* object using

      - .add() method.
      - Ex: collectionRef.add({value.prop})

- We get *snapshotObject* from the *referenceObject* using:

        .get() method
        Ex: documentRef.get() or collectionRef.get()

- documentRef returns *documentSnapshot* object.
- collectionRef returns a *querySnapshot* object.

### DocumentSnapshot
  - get from our *documnetReference object*
  - Allows us to checkt if document using: ***.exists()***
