import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type UserProfile = {
    name : Text;
    college : Text;
    branch : Text;
    year : Nat;
    semester : Nat;
    email : Text;
  };

  type ResourceType = { #notes; #video; #guide };

  type Resource = {
    title : Text;
    description : Text;
    resourceType : ResourceType;
    price : Nat;
    seller : Principal;
  };

  module Resource {
    public func compare(r1 : Resource, r2 : Resource) : Order.Order {
      Text.compare(r1.title, r2.title);
    };
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let resources = Map.empty<Text, Resource>();

  public shared ({ caller }) func registerUser(name : Text, college : Text, branch : Text, year : Nat, semester : Nat, email : Text) : async () {
    let profile : UserProfile = { name; college; branch; year; semester; email };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func listResource(title : Text, description : Text, resourceType : ResourceType, price : Nat) : async () {
    if (not userProfiles.containsKey(caller)) {
      Runtime.trap("User not registered");
    };
    let resource = {
      title;
      description;
      resourceType;
      price;
      seller = caller;
    };
    resources.add(title, resource);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    userProfiles.get(user);
  };

  public query ({ caller }) func getAllResources() : async [Resource] {
    resources.values().toArray().sort();
  };

  public query ({ caller }) func getUserResources(user : Principal) : async [Resource] {
    resources.values().toArray().filter(
      func(resource) {
        resource.seller == user;
      }
    );
  };
};
