# React Router v6 Catch-All Route Bug

This repository demonstrates a subtle bug in React Router v6 related to catch-all routes (`path="*"`).  The expected behavior is for the catch-all route to handle any invalid or unknown paths. However, in this example, it only works for paths not explicitly defined in the route configuration.

## Problem

The `NotFound` component, intended to display a 404 error, is not rendered for invalid paths (e.g., typos in the URL).  Instead, React Router seems to ignore the catch-all route and simply renders nothing.

## Solution

The solution involves using the `useLocation` hook to redirect the user to the catch-all route.