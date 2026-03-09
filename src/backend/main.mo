import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type ContactFormEntry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
    timestamp : Int;
  };

  type JobApplication = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    position : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactFormEntry {
    public func compareByTimestamp(a : ContactFormEntry, b : ContactFormEntry) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  module JobApplication {
    public func compareByTimestamp(a : JobApplication, b : JobApplication) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let contactFormEntries = Map.empty<Nat, ContactFormEntry>();
  let jobApplications = Map.empty<Nat, JobApplication>();
  var nextContactFormId = 0;
  var nextJobApplicationId = 0;

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    subject : Text,
    message : Text,
  ) : async () {
    let entry : ContactFormEntry = {
      id = nextContactFormId;
      name;
      email;
      phone;
      subject;
      message;
      timestamp = Time.now();
    };

    contactFormEntries.add(nextContactFormId, entry);
    nextContactFormId += 1;
  };

  public shared ({ caller }) func submitJobApplication(
    name : Text,
    email : Text,
    phone : Text,
    position : Text,
    message : Text,
  ) : async () {
    let application : JobApplication = {
      id = nextJobApplicationId;
      name;
      email;
      phone;
      position;
      message;
      timestamp = Time.now();
    };

    jobApplications.add(nextJobApplicationId, application);
    nextJobApplicationId += 1;
  };

  public query ({ caller }) func getAllContactForms() : async [ContactFormEntry] {
    contactFormEntries.values().toArray().sort(ContactFormEntry.compareByTimestamp);
  };

  public query ({ caller }) func getAllJobApplications() : async [JobApplication] {
    jobApplications.values().toArray().sort(JobApplication.compareByTimestamp);
  };
};
