package com.example.todolu;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.util.HashMap;


public class registration extends AppCompatActivity
{
    private EditText editTextRegisterFirstname, editTextRegisterLastname, editTextRegisterEmail, editTextRegisterPassword, editTextRegisterReenterpassword;
    private static final String TAG = "EmailPassword";

    FirebaseAuth auth;
    DatabaseReference reference;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.registration);


        editTextRegisterFirstname = findViewById(R.id.firstname);
        editTextRegisterLastname = findViewById(R.id.lastname);
        editTextRegisterEmail = findViewById(R.id.email);
        editTextRegisterPassword = findViewById(R.id.password);
        editTextRegisterReenterpassword = findViewById(R.id.reenterpassword);
        //redirect to login pg
        Button gotologin = findViewById(R.id.backToLogin);
        gotologin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                changetologin();
            }
        });
        //registration
        Button buttonRegister = findViewById(R.id.register);
        buttonRegister.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
            {
                String textFirstname = editTextRegisterFirstname.getText().toString();
                String textLastname = editTextRegisterLastname.getText().toString();
                String textEmail = editTextRegisterEmail.getText().toString();
                String textPassword = editTextRegisterPassword.getText().toString();
                String textReenterpassword = editTextRegisterReenterpassword.getText().toString();
                if (TextUtils.isEmpty(textFirstname))
                {
                    Toast toast = Toast.makeText(registration.this, "Please enter your first name.", Toast.LENGTH_LONG);
                    toast.show();
                    editTextRegisterFirstname.setError("First name required");
                    editTextRegisterFirstname.requestFocus();
                }
                if (TextUtils.isEmpty(textLastname))
                {
                    Toast toast = Toast.makeText(registration.this, "Please enter your last name.", Toast.LENGTH_LONG);
                    toast.show();
                    editTextRegisterLastname.setError("Last name required");
                    editTextRegisterLastname.requestFocus();
                }
                if (TextUtils.isEmpty(textEmail))
                {
                    Toast toast = Toast.makeText(registration.this, "Please enter your email.", Toast.LENGTH_LONG);
                    toast.show();
                    editTextRegisterEmail.setError("Email required");
                    editTextRegisterEmail.requestFocus();
                }
                if (TextUtils.isEmpty(textPassword))
                {
                    Toast toast = Toast.makeText(registration.this, "Please enter your password.", Toast.LENGTH_LONG);
                    toast.show();
                    editTextRegisterPassword.setError("Password required");
                    editTextRegisterPassword.requestFocus();
                }
                if (TextUtils.isEmpty(textReenterpassword))
                {
                    Toast toast = Toast.makeText(registration.this, "Please reenter your password.", Toast.LENGTH_LONG);
                    toast.show();
                    editTextRegisterReenterpassword.setError("Password required");
                    editTextRegisterReenterpassword.requestFocus();
                }
                if(textPassword.length() < 6)
                {
                    Toast toast = Toast.makeText(registration.this, "Password should be at least 6 digits. ", Toast.LENGTH_LONG);
                    toast.show();
                    editTextRegisterPassword.setError("Password too weak");
                    editTextRegisterPassword.requestFocus();
                }
                if (!textPassword.matches(textReenterpassword))
                {
                    Toast toast = Toast.makeText(registration.this, "Please enter the same password.", Toast.LENGTH_LONG);
                    toast.show();
                    editTextRegisterReenterpassword.setError("Password does not match");
                    editTextRegisterReenterpassword.requestFocus();
                }
                //register
                {
                    registerUser(textFirstname, textLastname, textEmail, textPassword, textReenterpassword);
                }
            }
        });
    }
    //Register user using given info
    private void registerUser(String textFirstname, String textLastname, String textEmail, String textPassword, String textReenterpassword)
    {
        auth = FirebaseAuth.getInstance();
        auth.createUserWithEmailAndPassword(textEmail, textPassword).addOnCompleteListener(registration.this, new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task)
            {
                if (task.isSuccessful()) {
                    // Sign in success, update UI with the signed-in user's information
                    Log.d(TAG, "createUserWithEmail:success");
                    FirebaseUser user = auth.getCurrentUser();
                    String userid = user.getUid();

                    reference = FirebaseDatabase.getInstance().getReference().child("Users").child(auth.getCurrentUser().getUid());

                    HashMap<String, Object> hashMap = new HashMap<>();
                    hashMap.put("id", userid);
                    hashMap.put("firstname", textFirstname);
                    hashMap.put("lastname", textLastname);
                    hashMap.put("email", textEmail);
                    hashMap.put("imageurl", "https://firebasestorage.googleapis.com/v0/b/todoluapp.appspot.com/o/nopfp.png?alt=media&token=4ed9d20e-7a5d-46ec-800b-8857223b6de9");
                    hashMap.get("imageurl");
                    reference.setValue(hashMap).addOnCompleteListener(new OnCompleteListener<Void>() {
                        @Override
                        public void onComplete(@NonNull Task<Void> task) {
                            Toast.makeText(registration.this, "Registration Successful.",
                                    Toast.LENGTH_SHORT).show();
                            updateUI(user);
                            Intent intent = new Intent(registration.this, main.class);
                            startActivity(intent);
                        }
                    });
                } else {
                    // If sign in fails, display a message to the user.
                    Log.w(TAG, "createUserWithEmail:failure", task.getException());
                    Toast.makeText(registration.this, "Authentication failed.",
                            Toast.LENGTH_SHORT).show();
                    updateUI(null);
                }
            }
        });
    }

    private void updateUI(FirebaseUser user) {
    }

    private void changetologin()
    {
        Intent intent = new Intent(this, login.class);
        startActivity(intent);
    }

}