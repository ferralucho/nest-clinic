INSERT INTO "user" (name, email, password, "isActive", roles) VALUES
    ('John Doe', 'john@example.com', 'password1', true, 'doctor'),
    ('Jane Smith', 'jane@example.com', 'password2', true, 'doctor'),
    ('Alice Johnson', 'alice@example.com', 'password3', true, 'doctor');

INSERT INTO "ehr" ("patient_name", description) VALUES
    ('John Smith', 'EHR 1'),
    ('Emma Thompson', 'EHR 2'),
    ('Michael Davis', 'EHR 3');

INSERT INTO "conditions" ("diagnostic_code", description) VALUES
    ('C001', 'Condition 1'),
    ('C002', 'Condition 2'),
    ('C003', 'Condition 3');
